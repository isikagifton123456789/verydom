class RecordsModel {
    constructor() {
        // Define the schema for records data
        this.records = [];
    }

    addRecord(record) {
        // Method to add a new record
        this.records.push(record);
    }

    getRecords() {
        // Method to retrieve all records
        return this.records;
    }

    findRecordById(id) {
        // Method to find a record by its ID
        return this.records.find(record => record.id === id);
    }

    updateRecord(id, updatedRecord) {
        // Method to update a record by its ID
        const index = this.records.findIndex(record => record.id === id);
        if (index !== -1) {
            this.records[index] = { ...this.records[index], ...updatedRecord };
        }
    }

    deleteRecord(id) {
        // Method to delete a record by its ID
        this.records = this.records.filter(record => record.id !== id);
    }
}

export default RecordsModel;