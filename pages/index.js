import Layout from "../layout";
import variables from "../styles/variables";
function Home() {
    return <Layout title={"صفحه اصلی"}>
        <h2>صفحه اصلی</h2>
        <img className="user-photo" src="/static/man.png" alt="my image" />
      
        <style jsx>{`
        div {
            color:${variables.black};
        }
     `}</style>
       <style global jsx>{`
        body {
          background: ${variables.lightGrey};
        }
      `}</style>

    </Layout>;
}

export default Home;