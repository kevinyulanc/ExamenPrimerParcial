import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';  // Definir la variable usuario
  correo: string = '';  // Definir la variable correo
  password: string = '';  // Definir la variable password
  confirmarPassword: string = '';  // Definir la variable confirmarPassword

  constructor(private alertController: AlertController) {}

  async validarContrasenas() {
    if (this.password === this.confirmarPassword) {
      // Si las contraseñas coinciden
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: '¡Bienvenido!',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Si las contraseñas no coinciden
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, intente de nuevo.',
        buttons: ['Intentar de nuevo']
      });
      await alert.present();
    }
  }
}
