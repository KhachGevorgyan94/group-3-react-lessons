import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import UsersList from "../../components/users-list";
import ReasonsSection from "../../components/reasons-section";
import InputSections from "../../components/input-sections";
import CounterComponent from "../../components/counterComponent";


/**
 * Componentner@ sarqum enq  class  objecti mijocov vor@  jarangvum e  react.Componentns objectic
 *
 * vor@ ir mej u ni voroshaki hnaravorutyunner  html@ fayl@  cuyc talu hamar {render}  funckiai mijocov
 * mer  bolor componentner@ sarqum eqn  index.jsx  {.jsx}  tipi
 * vorpeszi  ayt  js  fayler imej hasaneli linien html i hamar hasaneli teger@
 *
 * render=> return  karox eqn anel mimiayn  1  html  teg
 * kam ete petq e mi makardaki vra  return anel mi qani html  teg  ogtagorcum eqn  datark teger@
 * <></>
 *
 * ete  uneqn inch vor  teg vori mej  chka  content  informacia  ay teg@  karox eqn  greel miangamic bacvac  ev  pakvac vichakum
 *
 * <div/>
 *
 *
 * cankacac  component sarqluc  vorpiszi  ayn karoxananaq import anel anhrajesht e ayn anpayman export anel
 *
 * greladzevn  klini  ayspes  {export default HomePage}
 * **/
class HomePage extends React.Component {
  render() {
    return <>
      <UsersList/>
      <ReasonsSection/>
      <InputSections/>
      <CounterComponent/>
    </>
  }
}

export default HomePage