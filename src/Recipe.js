import { Button, Alert, Breadcrumb, Card, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

export default function Recipe() {
    return (
        <div>
           
          <div className="Container">
             <div className="Row">
               <div className="Col xs={6} md={4}">
                 <Image src="src/images/space.jpg" thumbnail />
               </div>
               </div>
           </div>
           
     Indian Food Recipes
      <div className="imgplaceholder">placeholder image</div>

      <div className="RecipeTitle"> <h1>Recipe Name</h1> </div>

      <div className="Ingedients"> <h3>Ingredients</h3> </div>

      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Quantity</th>
      <th>Item Name</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>Quantity  #</td>
      <td>Names</td>
    </tr>
    </tbody>
</Table>


<div className="Ingedients"> <h3>Instructions</h3> </div>
<p> Instuctions to be uploaded </p>

 
<div className="Footer">
Recipe lovingly inspired from <a href="https://herbivorecucina.blogspot.com/2017/03/kesar-kheer-saffron-rice-pudding.html"></a>

  </div>


      </div>

      


    )
}
