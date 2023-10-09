import pic1 from "../pic1.jpg"
import pic2 from "../pic2.jpg"
import topic1 from "../topic1.jpg";
import topic9 from "../topic9.jpg";


function Offers({isUKR}) {
  return (
    <div className="container marketing" id="OFFERS">

      <h2 className="pb-2">
        {!isUKR && `We offer two programmes`}
        {isUKR && `Ми пропонуємо дві програми`}
      </h2>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7" style={{marginTop: "6rem"}}>
        <h2 className="featurette-heading fw-normal lh-1">Lessons with a teacher. <span className="text-body-secondary">Lifetime program access.</span></h2>
        <p className="lead">You will work with a teacher and complete 12 topics. 
        The most important principle of our class will be indivisual appraoch. 
        We will learn at our own pace, and practice using our acquired knowledge in our speech.<br/>
        The first 6 topics are simpler and will take 7 weeks each.<br/>
        The next 6 topics are more complex, and will take 12 weeks.</p>
      </div>
      <div className="col-md-5">
        <img src={pic1} style={{width: "500px", maxWidth: "95vw"}} alt=""></img>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2" style={{marginTop: "6rem"}}>
        <h2 className="featurette-heading fw-normal lh-1">Homework only. <span className="text-body-secondary">Lifetime program access.</span></h2>
        <p className="lead">We will cover 12 topics. You will receive topics sequentially, and have unlimited time to finish a topic.<br/>
        There will be a practical task at the end of each topic, which you must solve and send to us.<br/>
        You will receive FEEDBACK (How can we improve, what needs more attention) and then access to the next topic.<br/>
        The first 6 topics are simpler and will take 5 classes each. Price - 750 UAH per topic <br/>
        The next 6 topics are more complex, and will take 10 classes. Price - 1450 UAH per topic </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={pic2} style={{width: "500px", maxWidth: "95vw"}} alt=""></img>        
      </div>
    </div>

    <hr className="featurette-divider" id="DISCOVERTOPICS"/>

    <div className="row featurette">
      <div className="col-md-7" style={{marginTop: "2rem"}}>
        <h2 className="featurette-heading fw-normal lh-1 mb-4">Topic One<span className="text-body-secondary">.</span></h2>
        <p className="lead">Pronouns (I, You, He, They)<br/>
        The verb 'to be' in Simple Present <br/> 
        Basic phrases to get to know each other <br/>
        Adjectives to describe people's appearance and personality <br/>
        Phrases and exercises for practising acquaintances.</p>
      </div>
      <div className="col-md-5">
        <img src={topic1} style={{width: "500px", maxWidth: "95vw"}} alt=""></img>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2" style={{marginTop: "2rem"}}>
        <h2 className="featurette-heading fw-normal lh-1">Topic Nine<span className="text-body-secondary">.</span></h2>
        <p className="lead"> 
        Modal verbs<br/>
        Ordering in cafes and restuarants <br/>
        Vocabulary and adjectives to describe food <br/>
        Shopping - vocabulary and adjectives to describe clothes<br/> 
        Degrees of comparison of adjectives </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img src={topic9} style={{width: "500px", maxWidth: "95vw"}} alt=""></img>        
      </div>
    </div>

    <hr className="featurette-divider my-5"/>

    {/* <div className="row featurette">
      <div className="col-md-7" style={{marginTop: "6rem"}}>
        <h2 className="featurette-heading fw-normal lh-1">Topic<span className="text-body-secondary"> One</span></h2>
        <p className="lead">Pronouns (I, You, He, They); The verb 'to be' in Simple Present; 
        Basic phrases to get to know each other; Adjectives to describe people's appearance and personality;
        Phrases and exercises for practising acquaintances.  </p>
        
        <h2 className="featurette-heading fw-normal lh-1">Topic<span className="text-body-secondary"> Nine</span></h2>
        <p className="lead">Ordering in cafes and restuarants; Vocabulary and adjectives to describe food; 
        Modal verbs; Shopping - vocabulary and adjectives to describe clothes; Degrees of comparison of adjectives  </p>
      </div>
      <div className="col-md-5">
        <img src={pic3} style={{width: "500px", maxWidth: "95vw"}} alt=""></img>
      </div>
    </div> */}

  </div> );
}

export default Offers;
