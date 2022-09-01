import Alert from 'react-bootstrap/Alert';


let MyContent = `Excepteur veniam sint sint cupidatat nisi incididunt nisi. Enim enim aliquip cillum ut. Consectetur id ipsum ut nostrud eiusmod tempor Lorem excepteur duis dolore anim.

Esse ad veniam esse deserunt culpa commodo cupidatat. Irure sit consectetur amet laboris reprehenderit reprehenderit irure sit. Amet enim adipisicing mollit reprehenderit mollit quis deserunt sit cillum quis minim tempor proident dolore. Amet irure dolore aute nostrud anim dolore.

Consequat ea culpa amet enim proident laborum ad nostrud quis dolore in Lorem non. Velit excepteur quis ipsum commodo id nostrud eiusmod nulla eiusmod magna ullamco eiusmod. Officia ut tempor veniam excepteur sint elit esse laboris mollit ipsum occaecat ad. Mollit esse officia in mollit aute. Ex id eu occaecat velit culpa aute.

Ex velit enim cupidatat enim do quis excepteur duis velit laborum. Velit aliquip incididunt nulla enim exercitation velit pariatur sint et commodo occaecat aliqua. Consequat et aliqua consequat deserunt reprehenderit.

Cupidatat duis velit est minim in non nisi laborum mollit sunt qui reprehenderit. Irure laborum ipsum nostrud dolor esse consectetur. Elit nisi ex est nisi consequat excepteur aliquip anim ex voluptate. Exercitation dolore commodo culpa quis Lorem. Cupidatat ea amet culpa ipsum officia veniam cillum. Cupidatat voluptate quis do exercitation ea labore laboris laboris elit consequat. Do voluptate Lorem anim et ipsum voluptate minim cillum.

Esse ex pariatur tempor consequat incididunt veniam cillum consequat amet nostrud consectetur veniam ea. Incididunt exercitation fugiat nisi adipisicing dolor aliquip cupidatat elit qui qui anim exercitation enim enim. Nisi tempor elit eiusmod consectetur Lorem ipsum tempor aute pariatur exercitation. Enim voluptate pariatur nostrud sit occaecat ea sit officia commodo Lorem reprehenderit. Exercitation in eiusmod ex quis sint sit irure cupidatat id laborum mollit dolor qui.

Laborum culpa ad dolor ipsum anim anim ut non anim ullamco pariatur magna velit labore. Magna consectetur sunt labore est magna. Sit anim et enim ut id culpa Lorem laborum dolore labore nulla adipisicing occaecat. Eiusmod adipisicing nostrud culpa excepteur sint ex eiusmod velit sint ipsum do. Id eiusmod cillum Lorem proident.`

let My2ndContent = `Deserunt sunt laboris nulla minim deserunt. Et laborum ex ex ullamco aute minim eiusmod dolor. Consequat culpa mollit proident tempor. Reprehenderit cillum id dolor dolor ex aliqua ipsum nostrud aute non ut sit minim Lorem. Lorem ex culpa incididunt occaecat exercitation occaecat occaecat esse eiusmod magna sint do. Aute mollit laborum excepteur qui id duis id sunt aliquip incididunt. Cupidatat elit commodo sunt velit est enim velit qui culpa.

Dolor est laboris veniam laboris mollit mollit. Proident sit eiusmod cillum voluptate proident qui deserunt velit ex. Est labore ea id duis nostrud exercitation velit.`

const Content = () => {
  return (
    <div className='Content'>
    <Alert variant="success">
      <Alert.Heading>This is Content</Alert.Heading>
      <p>
        {MyContent}
      </p>
      <hr />
      <p className="mb-0">
        {My2ndContent}
      </p>
    </Alert>
    </div>
  );
}

export default Content;