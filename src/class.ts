const log = (content: [...any]): void => console.log(content)

class DocName {
    public name: string
    constructor(name: string) {this.name = name}

    public getString(txt: string): string{
        return txt + this.name + "!"
    }
}


const BRUNO = new DocName("Bruno"); // this.name

log(
    [
    BRUNO.name = "Diego",
    BRUNO.getString("Hello World ") // "Bruno" = txt (paramater)
    ]
)