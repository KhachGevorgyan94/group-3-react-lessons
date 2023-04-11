import Box from "./components/box";
import {useEffect, useState} from "react";

const App = () => {
  const [boxes, setBoxes] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(boxes)
  /**
   *
   * useEffect@  amenakarevor  hookeric mek ne handisanum  React i hamar
   * ayn katarum e class componenti hamar naxatesvac  kyanqi tevoxutyan bolor hatkutyunner@
   *
   *   useEffect(()=>{
   *      {componentDidMount  katarum e ays gorcoxutyunn qani der  [] deps, ays hatvacum voreve popoxakanic kaxvacutyun chuni}
   *
   *      aysinqn  asy  funkcian kashxati 1  angam  component stexcvelu  jamanak
   *
   *
   *
   *     return ()=>{
   *       {componentDidUnmount  aysinqn component  mernelu  kam vochnchanalu jamanak katarvi inch voor gorcoxutyunner}
   *       himnakan gorcoxutyunner@ linum en  setTimeout setInterval kam addEventListener jnjelu hamar
   *     }
   *
   *   },[])
   *   []  ays  hatvacum grum eqn ayn popoxakanneri anunner@  voronc popoxvelu  depqum cankanum eqn  inch vor X funckia ashxati
   *   ayd  gorxosutyun hamarvum e class componenti componentDidUpdate
   *
   *
   * karcuvacq@ hetevyaln e
   */

  useEffect(() => {
    return () => {

    }

  }, [])


  useEffect(() => {
    console.log('bbbbbbbbbbbbbbb')
    setLoading(true)
    setTimeout(() => {
      setBoxes([
        {
          title: 'title 1',
          description: "description 1"
        },
        {
          title: 'title 2',
          description: "description 2"
        },
        {
          title: 'title 3',
          description: "description 3"
        },
        {
          title: 'title 4',
          description: ""
        }
      ])
      console.log(boxes, 'useEffect')
    }, 4000)

  }, [])
  //  ComponentDidMount


  useEffect(() => {
    if (boxes.length) {
      setLoading(false)
    }
    console.log(boxes, 'aaaaaaaaaaaaaaaaa')
  }, [boxes])
  //  ComponentDidUpdate


  useEffect(() => {


    return () => {
      //   componentWillUnmount
    }
  }, [])

  return <div className='P-data'>
    {!loading && boxes.map((item, index) => {
      return <Box key={index} title={item.title}
                  description={item.description}/>
    })}
    {loading ? <p>loading...</p> : null}
  </div>
}

// class App extends React.Component {
//   render() {
//     return <div className='P-data'>
//       <h1>Hi</h1>
//     </div>
//   }
// }

export default App


/**
 *  1.   Sarqel component vor@  parametrov  boolean arjeq, component  kanchelis,  kaxvac ayd arjeqic component@  nekel.  kamrir  ev dexin  guynerov
 *        componenti nesum karox e  linel patahakan texter  @st cankutyan,  xndir  npatakn e kaxvac parametri  ajeqic,  poxel ayd  componenti guynn
 *
 *   2.   Sarqel component  vortex  clini  button. component kanchelic,  butoni vra click aneluc aynpes anel vor amen clicki jamanak  component stana  patahakan guyn
 *
 *   3.  Sarqel component vori mej ka  input  dashter, firstName, lastName, age ev button.
 *      input dashterum  grum eqn hamapatasxan arjeqner@,  butoni vra click aneluc, inch vor P  tegi mej  grel  hetevyal artahayutyunn
 *
 *      Barev dzez im anunn e {firstName}, im azganunn e {lastName}, ev es {age} tarekan em
 *
 *    4. Sarqel component  vori mej ka  input dasht  ev button, component kanchelic input dashtum grum eqn  textain arheq
 *
 *      buttoni vra click aneluc inch vor P  tegum cuyc enq talis  nuyn text@ amboxjutyamb mecatarerov
 *      ev inch vor span tegi mej  cuyc eq talis ayd texti erkarutyunn.  hatuk dzer hamar orinak
 *
 *      Or. Es Khachikn em,  sa  mutagrum em,
 *      ardyunqn  linum e hetevyal@
 *
 *      ES KHACHIKN EM
 *      texti amboxj erkarutyunn@ klini - 14
 *
 *   5. Sarqel component vor@ uni  input dasht ev button, component uni hetevyal styler@  erkarutyun ev bardzrutyunn  orinak 300px
 *      u inch vor patahakan guyn
 *      input dashtum mutqagrum eqn  patahakan tiv, clicki jamanak  aynpes anel vor ard  component@ stana  borderRadius mutqagrvac tvin hamapatasxan
 *
 *
 *    6.  Sarqel component vor@ uni button ev  inch vor textain artahayutyu,  component@ kanchelis buttoni vra click aneluc
 *        aynpes anel vor toggle tarberakov ,ayd  text@  mek haytnvi mek anhetana,
 *
 *    7.  Sarqel component  vor@ uni 2 input dashter ev button, ayd dashterum mutqagrum eq  patahakan texter
 *        buttoni vra click anelu jamanak  ayd  texteri  texter@  input dashterum poxel,
 *
 *     8. Sarqel component vor@ uni button, cimponent@ kanchelis butno vra click aneluc  cuyc tal inch vor p tegi mej  clickneri qanak@ te qani anga me  click arvel ayd  buttoni var
 *
 *
 *
 *
 *
 * **/