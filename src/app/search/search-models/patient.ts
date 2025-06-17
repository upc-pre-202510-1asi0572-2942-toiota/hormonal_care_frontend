export class Patient {
  constructor(
    public id: number = 0,
    public fullName: string = '',
    public image: string = '',
    public gender: string = '',
    public phoneNumber: string = '',
    public birthday: string = '',
    public typeOfBlood: string = '',
    public personalHistory: string = '',
    public familyHistory: string = '',
    public doctorId: number = 0,
    public profileId: number = 0
  ) {}
}
