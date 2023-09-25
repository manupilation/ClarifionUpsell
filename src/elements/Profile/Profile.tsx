import KenImage from "../../../public/images/KenProfile.png";
import Stars from "../../../public/svgs/Stars.svg";
import VerifiedCheck from "../../../public/svgs/VerifiedCostumer.svg";
import ClarifionProduct from "../../../public/images/ClarifionProduct.png";

const Profile = (props: {classname: string}) => {
  const {classname} = props;

  return (
    <div className={classname}>
      <img src={ClarifionProduct} alt="" />
      <div>
        <img src={KenImage} alt="Ken smiling." />
        <div>
          <img src={Stars} alt="" />
          <div>
            <p>Ken T.</p>
            <img src={VerifiedCheck} alt="" />
          </div>
        </div>
      </div>

      <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
    </div>
  );
};

export default Profile;