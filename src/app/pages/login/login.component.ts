import { Course } from 'src/app/models/course.model';
import { CoursesUtilService } from './../../services/courses-util.service';
import { UsersUtilService } from './../../services/users-util.service';
import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersUtilService, private courseService: CoursesUtilService) {
   
  }
  async ngOnInit(): Promise<void> {
    await this.userService.login('ali2@gmail.com', '123')
    // await this.userService.login('admin', '@dm!n#123')
    // const course: Course = {
    //   id: 0,
    //   enName: 'Montage',
    //   arName: 'مونتاج',
    //   enDescription: '',
    //   arDescription: ' كورس مونتاج',
    //   imageUrl: '',
    //   startDate: new Date(),
    //   creationDate: new Date(),
    //   instractorId: '1',
    //   attendees: []
    // }
    // this.courseService.addNewCourse(course);
    const courses = await this.courseService.getCourses();
    const att: Attendee = {
        id: '',
        name: 'ahmed ali',
        email: 'wahba.it@gmail.com',
        mobile: '01066554433',
        landline: '223232222',
        gender: 'M',
        birthDate: '1991-12-9',
        joiningDate: new Date(),
        coursesId: [courses[0].id.toString()]
      }
    const attendeeId = await this.courseService.addCourseAttendee(att);
    // accept attendee to current course 
    attendeeId && this.courseService.addAttendeeToCourse(courses[0].id.toString(), attendeeId)
    console.log('course added', courses)
  }

}
