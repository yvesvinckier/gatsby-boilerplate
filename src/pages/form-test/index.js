import React from 'react'
import Helmet from 'react-helmet'
import BgImg from '../../components/background'
// import Link from 'gatsby-link'
// import Form, {
//   Checkboxes,
//   Input,
//   TextArea,
//   Select,
//   Submit,
//   Radios,
// } from 'components/Form'
// import ThankYou from 'components/ThankYou'

class FormTestPage extends React.Component {
  render() {
    const page = this.props.data.contentfulPage

    return (
      <div className='contact'>
        <Helmet>
          <title>Contacter - JEAN EMMANUEL RODE PHOTOGRAPHE </title>
          <meta
            name='description'
            content='Prenez contact avec JEAN EMMANUEL RODE PHOTOGRAPHE '
          />
          <meta
            property='og:title'
            content='Contacter - JEAN EMMANUEL RODE PHOTOGRAPHE'
          />
          <meta property='og:image' content={page.cover.sizes.src} />
          <meta property='og:image:width' content='1920' />
          <meta property='og:image:height' content='1200' />
          <meta
            property='og:url'
            content='https://www.jeanemmanuelrode.com/contact'
          />
        </Helmet>

        <div className='intro--contact'>
          <h2>Contact</h2>

          <a className='mail__to' href='mailto:rodejeanemmanuel@gmail.com'>
            rodejeanemmanuel@gmail.com
          </a>

          <a className='cell__number' href='tel:+33634113194'>
            +33 6 34 11 31 94
          </a>

          <BgImg
            height={'100vh'}
            sizes={page.cover.sizes}
            backgroundColor={'#f1f1f1'}
          />
        </div>

        {/* <div className="row">
          <div className="columns">
            <h2>Form Test</h2>
            <Form submittedElement={ThankYou} id="zwtrd7608mqb1q">
              <Input
                id="Field1"
                label="Name"
                autocomplete="name"
                placeholder="John Doe"
                required
                width="50%"
              />
              <Input
                id="Field2"
                label="Phone"
                autocomplete="tel"
                validator="phone"
                width="50%"
                required
              />
              <Input
                id="Field3"
                label="Email"
                autocomplete="email"
                placeholder="example@test.com"
                validator="email"
                required
              />
              <Select id="Field6" label="Options" required width={'50%'}>
                <option>Test</option>
                <option>Test2</option>
                <option>Test3</option>
              </Select>
              <Checkboxes label="Check some boxes" required>
                {[
                  { id: 'Field8', value: 'First Choice' },
                  { id: 'Field9', value: 'Second Choice' },
                  { id: 'Field10', value: 'Third Choice' },
                ]}
              </Checkboxes>
              <Radios id="Field109" label="Choose Your Favorite" required>
                {[{ value: 'Red' }, { value: 'Yellow' }, { value: 'Blue' }]}
              </Radios>
              <TextArea id="Field4" label="Message" />
              <Submit>Submit</Submit>
            </Form>

          </div>
        </div> */}
      </div>
    )
  }
}

export const query = graphql`
  query ContactQuery {
    contentfulPage {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`
export default FormTestPage
