import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

function Footer(props) {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Image centered size='mini' src='https://react.semantic-ui.com/logo.png' />
                <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List>
            </Container>
        </Segment>
    )
}


export default Footer

