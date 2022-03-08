import { Comment, Form, Header, Button, Container, Table, Label, Menu, Icon, Search, Grid, GridRow, GridColumn, Feed } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Container style={{ marginTop: '1rem' }}>
        <Table celled>
          <Table.Header>
            <Table.Row textAlign='right'>
              <Table.HeaderCell colSpan='3' textAlign='right'>
                <Search placeholder='Search countries...' />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell style={{ backgroundColor: "#F5F5DC" }}>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

        <Grid>
          <GridRow>
            <GridColumn width={11}>
              <Comment.Group threaded>
                <Header as='h3' dividing>
                  Comments
                </Header>

                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                      <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Jenny Hess</Comment.Author>
                        <Comment.Metadata>
                          <div>Just now</div>
                        </Comment.Metadata>
                        <Comment.Text>Elliot you are always so right :)</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                      <div>5 days ago</div>
                    </Comment.Metadata>
                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
              </Comment.Group>
            </GridColumn>
            <GridColumn width={5}>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' alt='' />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label icon='pencil' />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                    </Feed.Summary>
                    <Feed.Date style={{ marginTop: "0.15rem" }}>3 days ago</Feed.Date>
                    <Feed.Extra text>
                      I'm having a BBQ this weekend. Come by around 4pm if you can.
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>11 Likes</Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      Helen Troy added 2 new illustrations
                    </Feed.Summary>

                    <Feed.Extra images>
                      <a href='/'>
                        <img alt='' src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                      </a>
                      <a href='/'>
                        <img alt='' src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                      </a>
                    </Feed.Extra>

                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
