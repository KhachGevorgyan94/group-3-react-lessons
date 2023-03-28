import React from "react";

class CustomInput extends React.Component {


  //  this.props = {
  // name
  // placeholder
  // value
  // error
  // errorText
  // type
  // onChange
  //  }


  constructor(props) {
    super();
    console.log(props)
  }

  render() {
    return <div>
      <label className='G-input'>
        <input placeholder={this.props.placeholder}
               type={this.props.type}
               name={this.props.name}
               value={this.props.value}
               onChange={this.props.onChange}
        />
        {this.props.error ? <p className='P-error-text'>{this.props.errorText}</p> : null}
      </label>
    </div>
  }
}


export default CustomInput

const users = [
  {
    firstName: 'test',
    lastName: 'testyan',
    age: 20,
    email: 'tester@gmail.com',
    gender: 'male'
  },
  {
    firstName: 'test',
    lastName: 'testyan',
    age: 20,
    email: 'tester@gmail.com',
    gender: 'female'
  },
  {
    firstName: 'test',
    lastName: 'testyan',
    age: 20,
    email: 'tester@gmail.com',
    gender: 'male'
  },
  {
    firstName: 'test',
    lastName: 'testyan',
    age: 20,
    email: 'tester@gmail.com',
    gender: 'female'
  },
  {
    firstName: 'test',
    lastName: 'testyan',
    age: 20,
    email: 'tester@gmail.com',
    gender: 'male'
  }
]


/**
 * Bolor  xndirner@ grelu hamar  sarqum eq amen meki hamar arandzin componentner
 *
 * 1.  stexcel  component  vori  mej  klini input dasht  ev button,
 *     componentn  kanchelu jamanak  ekrani vra  haytnvi ayd input dasht@  ev  button@
 *     componenti  npatakn e  input dashtum  grel cankacac  text ev  butoni vra  click aneluc  byttoni  text@  poxel ayd mutqagrvac textov
 *     or, ete  buttoni text@ grvac e  {clicl me}  input dashtum grenq {Hii}  clickic  heto  butoni text@  kpoxvi {Hii}
 *
 * 2.  stexcel  component  vori  mej  klini 2  input dasht  ev button,
 *     componentn  kanchelu jamanak  ekrani vra  haytnvi ayd input dashter@  ev  button@
 *     componenti  npatakn e  input dashterum  mutqagrvactver@ bazmapatkel irar  ev  cuyc tal ekrani vra inch vor  tegi mej
 *
 *
 * 3.  stexcel  component  vori  mej  klini 2  input dasht  ev button,
 *     componentn  kanchelu jamanak  ekrani vra  haytnvi ayd input dashter@  ev  button@
 *      componenti  npatakn e input dashteric mekum grel cankacac text@  vor@  cuyc  petq e tal inch vor tegi  mej
 *      isk  myus input dashtum  mutqagrum enq  tvain arjeq@ ev butonin  click aneluc  texti  tarachap@  kpopoxvi  kaxvac ayd  mutqagrvac tvain arjeqic
 *  4. stexcel  component@  vor@  klini poqr  cardi  tesq  300 x 600 i vra  vor mej  klini  button
 *      buttoni vra click aneluc  tvyal  component@ kstana patahakan  guyn
 *      amen angam  click aneluc  guynn  popoxvi  patahakan random  guynov
 *
 *  5.  unenq  hetevyal ogtatereri cank@,
 *  dzer  npatakn e stexcel  component  cikli mijocov  ayd  componenti mijocov  nkarel ays  mardkanc  cank@
 *  componentum  petq  cuyc  tal  hetevyal informacina
 *  anun, azganun, gender, email,  ev  kaxvac genderic txa e te axjik  tvyal  componenti mej  cuyc tal patahakan  2  nkarneric mekn u mek@  txa kam axjka
 *  nkarnern @ntrum eq  duq
 *
 *
 * **/