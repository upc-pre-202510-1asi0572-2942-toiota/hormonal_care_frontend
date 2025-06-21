export class Appointment {
    eventDate: Date;
    startTime: string;
    endTime: string;
    title: string;
    description: string;
    doctorId: number;
    patientId: number;
    color: string;

    constructor(
      eventDate: Date,
      startTime: string,
      endTime: string,
      title: string,
      description: string,
      doctorId: number,
      patientId: number,
      color: string
    ) {
      this.eventDate = eventDate;
      this.startTime = startTime;
      this.endTime = endTime;
      this.title = title;
      this.description = description;
      this.doctorId = doctorId;
      this.patientId = patientId;
      this.color = color;
    }
  }
