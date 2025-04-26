class UserModel {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    save() {
        // Logic to save user information to the database
    }

    static findByEmail(email) {
        // Logic to find a user by email
    }

    static findById(id) {
        // Logic to find a user by ID
    }

    static updateUser(id, userData) {
        // Logic to update user information
    }

    static deleteUser(id) {
        // Logic to delete a user
    }
}

export default UserModel;