class UserService {
  constructor() {

  }

  getUser(id: string, message: string) {
    return {id, message}
  }
}

export { UserService }