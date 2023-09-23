const DealsPage = () => {
 return (
  <div className="deals">
   <h2>Deals and Promotions</h2>
   <div className="promo-con">
    <div className="promo">
     <img src="/images/family.jpg" alt="family" />
    </div>
    <div className="promo">
     <h3>Family Bundle</h3>
     <p>See the latest family films on the big-screen at Tongariro Cinemas and SAVE with a our Family Pass before 5pm!</p>
    </div>
   </div>

   <div className="promo-con">
    <div className="promo">
     <img src="/images/student.jpg" alt="studnet" />
    </div>
    <div className="promo">
     <h3>Student Concession</h3>
     <p>Sign up and get verified as a student and get exclusive discount of 15%. Save! Save! Save!</p>
    </div>
   </div>
  </div>
 )
}
export default DealsPage;