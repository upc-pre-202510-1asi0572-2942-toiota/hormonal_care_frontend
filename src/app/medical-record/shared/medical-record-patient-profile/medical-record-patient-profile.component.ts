import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-record-patient-profile',
  templateUrl: './medical-record-patient-profile.component.html',
  styleUrls: ['./medical-record-patient-profile.component.css']
})
export class MedicalRecordPatientProfileComponent {
  // Datos simulados para visualizar en el navegador
  patient = {
    photo: 'https://via.placeholder.com/150', // Cambiar por la URL de la foto del paciente
    name: 'John Doe', // Reemplazar con el nombre del paciente del GET
    age: 35, // Reemplazar con la edad del paciente del GET
    gender: 'Masculino', // Reemplazar con el género del paciente del GET
    bloodType: 'O+' // Reemplazar con el tipo de sangre del paciente del GET
  };

  // Aquí deberás integrar la lógica para obtener los datos del paciente
  // mediante un servicio HTTP.
}
