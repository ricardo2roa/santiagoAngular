import {EventEmitter, Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable()
export class LoginService{

  /*
    registrarse(email: string, password: string){
        return new Promise((resolve, reject)=>{
          this.authService.createUserWithEmailAndPassword(email,password).then(datos=>resolve(datos),
            error=>reject(error))
        });
    }
  */
  token: any;

  constructor(private router:Router) {
    const firebaseConfig = {
      apiKey: "AIzaSyAL_oBAPCWqVeAt0cE3amWIIz7t0_aL4os",
      authDomain: "proyecto-planta-b80cd.firebaseapp.com",
      databaseURL: "https://proyecto-planta-b80cd-default-rtdb.firebaseio.com",
      projectId: "proyecto-planta-b80cd",
      storageBucket: "proyecto-planta-b80cd.appspot.com",
      messagingSenderId: "118948823175",
      appId: "1:118948823175:web:3dbded964d0cb8095c7822"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);

  }

  login(email:string,password:string){

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        userCredential.user.getIdToken().
        then(( token) =>{
          this.token = token
        }).catch((error)=>{
          const errorMessage = error.message;
          console.log("Error: "+errorMessage)
        });

        console.log("Hols")

        this.router.navigate(["/"])
        // ...
      })
      .catch((error:any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: "+errorMessage)
      });
  }

  auth = new EventEmitter<boolean>();

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    const auth = getAuth();
    signOut(auth)
      .then(() =>{
        this.token = null;
        this.router.navigate(["login"]);
      }).catch((error)=>{
      const errorMessage = error.message;
      console.log('Error al cerrar la sesion '+errorMessage)
    })
  }
}
