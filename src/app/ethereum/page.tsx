import React from 'react';
import MouseDownLink from '../../components/MouseDownLink';
import ContentBlock from '../../components/page/Content';

const Ethereum = (props: any) => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>What is Ethereum?</h1>

        <p>Ethereum is a technology built for the public good.</p>

        <p>It is a worldwide system, an <strong>open-source platform <sup>1</sup></strong> to write computer code that stores and automates digital databases using smart contracts, without relying upon a <strong>central intermediary <sup>2</sup></strong>, solving trust with <strong>cryptographic <sup>3</sup></strong> techniques.</p>

        <p>Ethereum is not owned by anybody, and it is built and maintained by thousands of people, organizations, and users all over the world; it is a commons from which everyone can benefit. In the code, there are incentives for participants to help secure the system. Access to Ethereum is open to everyone; no permission is required. The network is powered by <strong>nodes<sup>4</sup></strong> that anyone can run. The global network of Ethereum nodes all together work to maintain a shared <strong>state <sup>5</sup></strong> - a foundation of trust upon which more complex human relationships can grow.</p>
        <MouseDownLink href="/ef" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> What is the EF? </p>
        </MouseDownLink>
        <div id="reference-list">
          <ol>
            <li>Open Source software is freely available code that anyone can read, improve, and distribute. Ethereum is Free Software in the &apos;freedom&apos; sense – anyone may inspect the code to learn more about it, anyone may run the code to secure the network, and anyone may distribute the software to help one&apos;s neighbor. </li>
            <li>Many networks require a trusted operator or central intermediary in order to function. Ethereum and related blockchain technologies enable a network that does not have this requirement, resulting in a resilient and highly distributed system that does not rely on any special authority for its operation or security. </li>
            <li>Cryptography is the science of &apos;secret writing&apos; – using mathematical techniques, cryptography enables the encoding and decoding information between parties, so that communication can take place over public channels securely. </li>
            <li>Nodes are individual points that connect together to form a network. In the case of Ethereum, a single node is one computer that runs an Ethereum client to maintain consensus over the global shared state. An Ethereum node can be run by anyone, anywhere using widely available computer hardware and an open source ethereum client. </li>
            <li>&apos;State&apos; as in &apos;state of affairs&apos; or &apos;state machine&apos; (not &apos;nation state&apos;). The Ethereum state is like a programmable &apos;permanent record&apos; of accounts, balances, and other details – one that is highly reliable and credibly neutral. </li>
          </ol>
        </div>
        <MouseDownLink href="/ef" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p>What is the EF?</p>
        </MouseDownLink>
      </div>
    </ContentBlock>
  )
}

export default Ethereum;