class ItemType {
  id: string;
  description: String;
  imageLink: string;
  Title: string;

  constructor(description: string, imageLink: string, Title: string) {
    this.Title = Title;
    this.id = Math.floor(Math.random() * 100).toLocaleString() + this.Title;
    this.description = description;
    this.imageLink = imageLink;
  }
}
export default ItemType;
