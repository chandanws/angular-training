
export class AuthService {
  private loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
        // resolve(this.loggedIn);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
