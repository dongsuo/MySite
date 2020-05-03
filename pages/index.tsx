import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
const GitHubButton = dynamic(() => import('react-github-btn'), { ssr: false })

const IndexPage = () => (
  <Layout title="Home | Let me introduce Dongsuo">
    <h1>Hi, Welcome.</h1>
    <h4>Let me introduce.</h4>
    <p>
      Dongsuo(东索 in Chinese) is a programmer, born in 1992. He lived in Wuhan from 2011 to 2018. 
      Now he is living in Shanghai and working at <a href="https://www.bytedance.com/en" target="_blank">Bytedance</a>.
    </p>
    <p>
      He majored in Library Science in Wuhan University as bachelor and master, 
      (Library Science is a domain about information organization and management). 
      He learned programming all by himself, he is still trying 
      to have a more comprehensive understanding of computer and internet.
    </p>
    <p>
      He likes reading, mostly about history, sociology and philosophy.
    </p>
    <p>
      He is an idealist, he believes the world will be better, though he may fall into despair sometimes.
    </p>
    <p>
      His favorite singer is <a href="https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%BF%97" target="_blank">lizhi</a>.
    </p>
    <p>
      He like the design of Apple's product, but he doesn't like Apple's closed software ecosystem.
      And this is also the reason why he doesn't like WeChat and Tencent, he is trying to get rid of WeChat as possible as he can. 
    </p>
    <p>
      He mainly works as a frontend programmer, but he has a passion for building elegant product.
    </p>
    <p>Here is some of his works:</p>
    <ul>
      <li>
        <a href="https://vislib.best" target="_blank">vue-data-board: A Data Analysis Board in Vue.</a>
        <GitHubButton href="https://github.com/dongsuo/vue-data-board" data-show-count aria-label="Star dongsuo/vue-data-board on GitHub">Star</GitHubButton>
      </li>
      <li>
        <a href="https://islasher.com/vue-terminal/" target="_blank">vue-terminal: A terminal emulator in Vue. </a>
        <GitHubButton href="https://github.com/dongsuo/vue-terminal" data-show-count aria-label="Star dongsuo/vue-terminal on GitHub">Star</GitHubButton>
      </li>
    </ul>
    <p>He also has a <a href="https://blog.islasher.com">blog</a>. </p>
    <p>You can find him here:</p>
    <GitHubButton href="https://github.com/dongsuo" aria-label="Follow @dongsuo on GitHub"></GitHubButton>
    <p>
      If you are interested in him and want to chat with him, feel free to get in touch via 
      <a href="mailto:xuxiaofei915@gmail.com">xuxiaofei915@gmail.com</a>, He is a little shy, but he will reply you.</p>
  </Layout>
)

export default IndexPage
