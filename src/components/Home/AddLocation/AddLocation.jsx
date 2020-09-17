import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AddLocation.css';

const AddLocation = (props) => {

    const [name, setName] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        const newLoc = {
            location: {
                name: name,
            }
        }

        fetch('http://localhost:3002/location/create', {
            method: 'POST',
            body: JSON.stringify(newLoc),
            headers: {       
            'Content-Type': 'application/json',
            'Authorization': props.token
    }})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h3>Add a trip location here</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="locationName">Name: </Label>
                    <Input type="name" name="locationName" id="locationName" value={name}
                    placeholder="Where are we going?" onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <br />
                <Button type="submit" variant="outlined" size="large">Add</Button>
            </Form>
        </div>
    )
}

export default AddLocation;