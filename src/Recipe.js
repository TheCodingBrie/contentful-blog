import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

export default function Recipe() {
    return (
        <div>
        <div className="Recipe">
            <div className="Header">
                <Card>
                    <Card.Img />
                </Card>
                <Breadcrumb> 
                  <Breadcrumb.Item>Medium</Breadcrumb.Item>
                  <Breadcrumb.Item>Difficult</Breadcrumb.Item>
                  <Breadcrumb.Item active>Easy</Breadcrumb.Item>
                </Breadcrumb>
                <Alert variant="success">Recipes for World Wide Food Blog</Alert>
            </div>
        <div class="card" style="width: 18rem;">
  {/* <img src="
https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545" class="card-img-top" alt="Recipe page"/>
  <div class="card-body">
    <h5 class="card-title">Recipe Page Description</h5>
    <p class="card-text">Continental recipes to be added</p>
   
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item">Ingredients</li>
    <li class="list-group-item">A third item</li>
  </ul> */}

</div>          
</div>
</div>

    )
}
