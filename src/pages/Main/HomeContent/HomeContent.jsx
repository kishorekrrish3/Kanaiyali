import React, { useEffect, useState } from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="content-1">
        <h1 className="content-1-title">கணையாழி</h1>
        <div className="content-1-text-container">
          <p className="content-1-text">
            'கணையாழி ' அது ஒரு அணி.ஆகையால் தமிழ் மன்றத்திற்கு அணிகலனாய் அழகு
            சேர்க்கவே கணையாழி எனப் பெயரிட்டோம். இதில் உங்கள் எழுத்துகளின்
            வண்ணங்கள் வரைய ஒரு தளம் தரப்படுகிறது. கவிதை ,கதை,புதிர்,
            நாட்குறிப்புகளின் சில நிதர்சனம் என எழுத்துக்களின் வடிவங்களை
            வாழ்வளிக்க வழிவகுத்த மேன்மையான மின்மேடை கணையாழி.
          </p>
        </div>
      </div>
      <div className="content-2">
        <h1 className="content-2-title">அறிஞர் அண்ணா தமிழ் மன்றம்</h1>
        <div className="content-2-text-container">
          <p className="content-2-text">
            மாணவர்களிடையே தமிழ் வளம் போற்ற 2015 ஆம் ஆண்டு இனிதே துவங்கியது
            அறிஞர் அண்ணா தமிழ் மன்றம், 2017ஆம் ஆண்டு கூடுதல் பொறுப்புகளோடு
            மேம்படுத்தப்பட்டது சட்டம் பேசு ,மாதிரி சட்டசபை ,சுதந்திர வீரர்களின்
            வரலாறு ,பெருமையின் அருமை ,பட்டிமன்றம், கவிச்சொல் போட்டி ,தனித்திறன்
            பொது ,விளையாட்டுப் போட்டிகள் ,மொழி வளர்ப்பு நிகழ்ச்சிகள்,மட்டுமின்றி
            முப்பெரும் நிகழ்ச்சியான "உழவர் திருநாள் ",தீப ஒளித்திருநாள் "மற்றும்
            "முத்தமிழ் திருநாள் நம் தமிழ் மன்றத்தின் சிறப்பு
            நிகழ்ச்சிகளாகும்.மேலும் பல உச்சங்களைத் தொட ,உற்சாகத்தோடு நீங்கள் கை
            கோர்த்துக் கொள்ளும் இடமாகத் திகழ்வது தான் நம் அறிஞர் அண்ணா தமிழ்
            மன்றம்.
          </p>
        </div>
      </div>
      <div className="content-3">
        <h1 className="content-3-title">இலக்கியம்</h1>
        <div className="content-3-text-container">
          <p className="content-3-text">
            பாரதியார் முதல் இன்றைய பா.விஜய் வரை கவிஞர்கள்
            மாறியிருக்கலாம்.ஓலைகளிலிருந்து ஓய்வு பெற்று தாள்களில்
            மாறியிருக்கலாம்.மயில்பீலிகலிருந்து பேனாக்கள்
            பணியமர்த்தப்பட்டிருக்கலாம். சொல்வலைகள் குறைத்திருக்கலாம் சொல்வளம்
            குறைந்ததில்லை.அன்றைய பாக்கள் சொன்ன கதைகளுக்கு இன்றைய புதுக்கவிதைகள்
            ஒன்றும் சளித்ததில்லை. மொழிகளின் வரலாறு மற்ற மொழிகளுக்குத் துவக்கம்‌
            அல்லது வளர்ச்சி. ஆனால் தமிழ் மொழி என்பது என்பது ஒரு கலாச்சாரத்தின்
            வரைவு .வாழ்வியலையே மொழியாகக் கொண்டது .எங்கள் தமிழ் வளர்ந்து கொண்டே
            இருக்கிறது ,தளர்ந்ததே இல்லை. பத்துப்பாட்டு,எட்டுத்தொகை,
            பதினெண்கீழ்க்கணக்கு என்று இது வெறும் எண்ணிக்கை அல்ல.எண்ணிலடங்கா
            எண்ணங்களின் பல வண்ணம். அமிழ்தினும் இனிய அருந்தமிழ் ஆழி ஆழம்
            அளக்கமுடிய வளம் ஈரடிக் குறள்களில் உலகம் உரைக்கும் உன்னதம்.
            உணர்வுகளின் உச்ச மொழி இது.சமத்துவமே மகத்துவமாய், சிகரங்கள் ஆசை
            கொள்ளாது சிரம் தாழ்த்தி வணங்க வைக்கும் ஒரு மொழி ,எங்கள் வாழ்வியலைச்
            செதுக்கிய உளி.வாஞ்சையோடு வரவேற்று வாழவைப்போம் இன்றும் என்றும்...
          </p>
        </div>
      </div>

      <div className="content-4">
        <h1 className="content-4-title">நிகழ்ச்சிகள்</h1>
        <div className="img-frame">
          <div className="content-4-partition">
            <div className="img-slideshow">
              <img src="assets/img-1.png" alt="img-1" className="slide-img" />
              <img src="assets/img-2.jpg" alt="img-1" className="slide-img" />
              <img src="assets/img-3.jpg" alt="img-1" className="slide-img" />
            </div>

            <ul className="content-4-text">
              <li className="list-item">சட்டம்பேசு</li>
              <li className="list-item">மாதிரி சட்டசபை</li>
              <li className="list-item">சுதந்திர வீரர்களின் வரலாறு</li>
              <li className="list-item">பட்டிமன்றம்</li>
              <li className="list-item">கவிச்சொல் போட்டி</li>
              <li className="list-item">தனித்திறன் பொது</li>
              <li className="list-item">விளையாட்டு போட்டிகள்</li>
              <li className="list-item">மொழி வளர்ப்பு நிகழ்ச்சிகள்</li>
              <li className="list-item">
                முப்பெரும் நிகழ்ச்சியான "உழவர் திருநாள் ",தீப ஒளித்திருநாள்
                "மற்றும் "முத்தமிழ் திருநாள்.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
