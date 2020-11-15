import React from 'react';
import Body from 'src/Components/Shared/Body/Body';
import Center from 'src/Components/Shared/Center/Center';
import Container from 'src/Components/Shared/Container/Container';
import Typography from 'src/Components/Shared/Typography/Typography';
import Col from './Components/Shared/Col/Col';
import Row from './Components/Shared/Row/Row';
import Spacer from './Components/Shared/Spacer/Spacer';
import Toggle from './Components/Shared/Toggle/Toggle';

function App() {
  return (
    <Container>
      <Body>
        <Center vertical>
          <Toggle visible={true}>
            <Typography variant={'primary'} textAlign={'center'} fontSize={40}>
              Hello World!
            </Typography>
            <Spacer size={100} backgroundColor={'red'} />
            <Row flex={1}>
              <Col style={{backgroundColor: 'orange'}} />
              <Col style={{backgroundColor: 'orange'}} />
              <Col style={{backgroundColor: 'black'}} />
            </Row>
          </Toggle>
        </Center>
      </Body>
    </Container>
  );
}

export default App;
