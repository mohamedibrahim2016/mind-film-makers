import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, getDocs, setDoc, addDoc, doc, query, and, where, getDoc, deleteDoc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { UtilitiesService } from './utilities.service';
// import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class FirestoreDbService {
  firestore: Firestore = inject(Firestore);

  constructor() {
    //  this.loadCollection('users');
  }

  getAuthCredentials(): { token: string; userId: string } | null {
    const token = sessionStorage.getItem('token');
    const userInfo = sessionStorage.getItem('user');
    const userId = userInfo && JSON.parse(userInfo)?.id;
    return token && userId ? { token, userId } : null;
  }

  async loadCollection(collectionName: string) {
    const collectionRef = collection(this.firestore, collectionName);
    const collectionRecords = await getDocs(collectionRef);
    console.log(
      collectionName,
      collectionRecords.docs.map((d) => d.data())
    );
    return collectionRecords.docs.map((d) => d.data());
  }

  addToCollection(
    collectionName: string,
    document: any,
    documentId: string
  ): boolean {
    try {
      setDoc(doc(this.firestore, collectionName, documentId), document, {
        merge: true,
      });
      return true;
    } catch (error) {
      console.log('add Doc error: ', error);
      return false;
    }
  }

  async loadDocumentFromCollection(collectionName: string, documentId: string) {
    const docRef = doc(this.firestore, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return false;
  }

  addNewDocumentToCollection(collectionName: string, document: any): boolean {
    try {
      addDoc(collection(this.firestore, collectionName), document);
      return true;
    } catch (error) {
      console.log('add New Doc error: ', error);
      return false;
    }
  }

  async updateSelectedDocument(
    collectionName: string,
    documentId: string,
    updatedFieldObject: any
  ) {
    try {
      const docRef = doc(this.firestore, collectionName, documentId);
      await updateDoc(docRef, updatedFieldObject);
    } catch (error) {
      console.log('Error while updating doc: ', error);
    }
  }

  updateDocumentArrayField(
    collectionName: string,
    documentId: string,
    arrFieldName: string,
    newValue: string
  ) {
    const updateObject = { [arrFieldName]: arrayUnion(newValue) };
    this.updateSelectedDocument(collectionName, documentId, updateObject);
  }

  async deleteDocumentFromCollection(
    collectionName: string,
    documentId: string
  ) {
    await deleteDoc(doc(this.firestore, collectionName, documentId));
  }

  async validateUser(userName: string, password: string) {
    try {
      const usersRef = collection(this.firestore, 'users');
      const q = query(
        usersRef,
        and(where('userName', '==', userName), where('pass', '==', password))
      );
      const records = await getDocs(q);
      return records?.docs?.map((d) => d.data());
    } catch (error: any) {
      return new Error(error);
    }
  }
}
