import { Attendee } from './../models/attendee.model';
import { Injectable } from '@angular/core';
import { FirestoreDbService } from './firestore-db.service';
import { UtilitiesService } from './utilities.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesUtilService {
  attendeesCollection = 'attendees';
  coursesCollection = 'courses';
  courses!: Course[];

  constructor(private db: FirestoreDbService) {}

  async getCourses() {
    this.courses = (await this.db.loadCollection(
      this.coursesCollection
    )) as Course[];
    return this.courses;
  }

  addNewCourse(courseData: Course) {
    const token = sessionStorage.getItem('token');
    const userId =
      sessionStorage.getItem('user') &&
      JSON.parse(sessionStorage.getItem('user')!)?.userName;
    if (!token || !userId) return;
    courseData.id = new Date().getTime();
    courseData.token = token;
    courseData.userId = userId;
    this.db.addToCollection(
      this.coursesCollection,
      courseData,
      courseData.id.toString()
    );
  }

  addAttendeeToCourse(courseId: string, attendeeId: string) {
    this.db.updateDocumentArrayField(
      this.coursesCollection,
      courseId,
      'attendees',
      attendeeId
    );
  }

  async addCourseAttendee(attendee: Attendee) {
    const existingAttendee: Attendee = (await this.checkAttendeeExist(
      attendee.email,
      attendee.mobile
    )) as Attendee;
    if (existingAttendee) {
      if (existingAttendee.coursesId.includes(attendee.coursesId[0]))
        return existingAttendee.id;
      existingAttendee.coursesId.push(attendee.coursesId[0]);
      this.db.addToCollection(
        this.attendeesCollection,
        existingAttendee,
        existingAttendee.id
      );
      return existingAttendee.id;
    } else {
      attendee.id = this.fetchEncodedId(attendee.email, attendee.mobile);
      this.db.addToCollection(this.attendeesCollection, attendee, attendee.id);
      return attendee.id;
    }
  }

  async checkAttendeeExist(email: string, mobile: string) {
    const docKey = this.fetchEncodedId(email, mobile);
    const document = await this.db.loadDocumentFromCollection(
      this.attendeesCollection,
      docKey
    );
    if (document && Object.keys(document).length > 0) return document;
    return false;
  }

  fetchEncodedId(email: string, mobile: string) {
    const emailId = email.split('@')[0];
    return UtilitiesService.encodeCompositeId(emailId, mobile);
  }
}
