interface Rectangle {
    height: number,
    width: number
  }
  
  const coloredRectangle: Rectangle = {
    height: 20,
    width: 10,
  };

interface Txt {
    title: string,
    subtitle: string
}

interface Heranca extends Txt{ title: "" }

const write: Txt = {
    title: "Era uma vez",
    subtitle: "Robinho"
}
const ObjOne ={
    a: 1
}

