// This is just a blueprint which can then be used by typeScript to enforced

export class Recipe {
    public name: String;
    public description: String;
    public imagePath: String;

    constructor( name: String, description: String, imagePath: String) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
