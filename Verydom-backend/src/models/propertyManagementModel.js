class PropertyManagementModel {
    constructor() {
        // Define the schema for property management
        this.properties = [];
    }

    addProperty(property) {
        this.properties.push(property);
        return property;
    }

    updateProperty(id, updatedProperty) {
        const index = this.properties.findIndex(prop => prop.id === id);
        if (index !== -1) {
            this.properties[index] = { ...this.properties[index], ...updatedProperty };
            return this.properties[index];
        }
        return null;
    }

    deleteProperty(id) {
        const index = this.properties.findIndex(prop => prop.id === id);
        if (index !== -1) {
            return this.properties.splice(index, 1)[0];
        }
        return null;
    }

    getAllProperties() {
        return this.properties;
    }

    getPropertyById(id) {
        return this.properties.find(prop => prop.id === id);
    }
}

export default PropertyManagementModel;