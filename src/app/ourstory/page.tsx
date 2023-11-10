import React from 'react';
import MouseDownLink from '../../components/MouseDownLink'
import ContentBlock from '../../components/page/Content';
import Image from 'next/image';

const EthereumFoundation = () => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>Our Story</h1>
        <p>In less than a decade, <MouseDownLink  href="https://ethereum.org/en/history/">Ethereum has grown</MouseDownLink> from a single seed into a vast forest of entangled roots.  What began as experimental software run by a handful of cryptography enthusiasts is now a network of tens of thousands of computers around the world. The Ethereum protocol is a global commons &ndash; a shared space on the open internet that is secure and robust enough to build things of real value on &ndash; things of great importance to human society, like currency, identity, and governance systems. </p>
        <p>Ethereum is no longer fragile, but it is not yet mature. Through grants, research, and other initiatives, the Ethereum Foundation nurtures the vitality of the ecosystem and supports benevolent actors, working so that Ethereum remains a true public good: Directed by none, useful for all.</p>
        <p>The Ethereum Foundation has changed quite a bit over the years, but has always been a character in the story of Ethereum...</p>
        
        <Image  src="/assets/ourstory-1.jpg" 
                width={2000} 
                height={1125} 
                alt="Frontier"
                layout="responsive"
//                placeholder="blur"
//                blurDataURL="/assets/whatwedo-1-placeholder.png"
                priority
                />


        <p>In the beginning Ethereum was a <em>frontier</em>.</p>
        <p>It was a vast and sparsely populated space created from axioms and first principles.  Ethereum's existence was (and still is) rooted in the credibility and neutrality of <strong>consensus</strong> &ndash; the agreement between all, for all, over a set of rules (of protocol) that apply equally to all. From consensus emerged the possibility of a shared common state (of memory). This state was enshrined in the living Merkle Tree, a special data structure designed to grow and change according to the will of all humans able to read and write upon its leaves. No individual or organization would ever 'own' Ethereum, but all could contribute to its growth and build upon it.</p>
        <p>Those that first came to this new paradigm saw enormous potential, tempered by incalculable risks and unknown unknowns. In that era, the Ethereum Foundation was set up to create the conditions necessary for survival. The Ethereum Foundation organized the first gatherings of Ethereum enthusiasts and visionaries, provided funding for early infrastructure, supported R&D, and generally helped to protect and nurture the fragile experiments starting to take root in the fertile soil of consensus. </p>
        <p>Many of the early contributors to Ethereum joined the Foundation in order to lay the groundwork for newcomers enticed by the same spark of curiosity and hope of what could be built here with time. They did so with the conviction that, under the right conditions and with some nurturing, Ethereum would grow and flourish into a tool robust enough to be used and relied upon by all humans, far into the future. </p>

        <Image  src="/assets/ourstory-2.jpg" 
                width={2000} 
                height={1125} 
                alt="Homestead"
                layout="responsive"
//                placeholder="blur"
//                blurDataURL="/assets/whatwedo-2-placeholder.png"
                priority
                 />

        <p>Gradually at first, but quicker with the passing seasons, people from many other worlds came to see Ethereum as a place worth exploring. As the Merkle Tree grew larger and more firmly rooted, they built more complex and intriguing structures intertwined with its leaves and branches. The shared, common state of Ethereum provided a fixed point of trust in a universe filled with uncertainty and change. Things that had seemed impossibly complex to build in unbounded digital space <MouseDownLink  href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/">became accessible</MouseDownLink> to anyone willing to learn a new language, and usable to anyone with a willingness to try.</p>
        <p>What had started as a small homestead was fast becoming a <em>metropolis</em>. To those with experience in other worlds, the rapid growth during this era was exciting. The beautiful, sometimes strange creations that emerged from the prodigious growth of the Ethereum commons became more complex and fit with each passing day. </p>
        <p>As a steward of protocol development, the Foundation faced enormous pressure to scale in order to meet the needs of more and more users, as was the custom for companies selling products. But an organization is a very different thing from a protocol, and the Foundation needed a different way.</p>
        <p>For Ethereum, the protocol, to thrive and scale well, it must not be dependent on any one person or organization, even a benevolent one. Ethereum's growth and value as a network comes from the general will of humans to form consensus. Consensus cannot be manufactured; it must grow naturally from seeds of trust with the light of verification. A healthy collective of contributors to a consensus protocol should be characterized by diversity and plurality, not hegemony. Were the Foundation to claim a central role in the Ethereum ecosystem, it would be at odds with the core values enshrined in the protocol code -- at odds with the vision of Ethereum's future called <em>serenity</em>. </p>
        <p>In the midst of that tension between leading and following, between growth and resilience, between nature and nurture – the Foundation began to develop and practice the discipline of Subtraction. </p>

        <Image  src="/assets/ourstory-3.jpg" 
                width={2000} 
                height={1125} 
                alt="Bazaar"
                layout="responsive"
//                placeholder="blur"
//                blurDataURL="/assets/whatwedo-3-placeholder.png"
                priority
                />

        <p>After years, Ethereum grew by leaps and bounds. Newcomers arrived to build companies, to <MouseDownLink  href="https://ethereum.org/en/developers/docs/standards/tokens/erc-721/">create art</MouseDownLink> that would be traded in bazaars, to <MouseDownLink  href="https://ethereum.org/en/developers/docs/bridges/">build bridges</MouseDownLink> with other distant worlds. The number of people entangled with the roots of the Merkle Tree doubled, and doubled yet again. </p>
        <p>Such growth came at a cost for the Merkle Tree, however. The weight of demand from so many was a heavy burden for its roots to bear, and made Ethereum more difficult and expensive than what users and builders deserved. Furthermore, the practice of mining Ether, which underpinned the consensus of the state, was perpetuating an unacceptable and catastrophic waste of energy. It had long been clear that Ethereum would have to change significantly to meet the needs of all users, present and future. But the Merkle tree was (and still is) rooted in consensus. Changes to the core Ethereum protocol would have to come from the general will of the whole ecosystem. The Ethereum Foundation might have had the ability to push through the necessary changes quickly, to leverage power and dictate a new plan for the growth of Ethereum. But this was not the way of subtraction. </p>
        <p>Instead, the Ethereum Foundation took on a role of coordination. A <MouseDownLink  href="https://blog.ethereum.org/2018/03/07/announcing-beneficiaries-ethereum-foundation-grants">new grants program</MouseDownLink> was created to help seed independent teams working towards the same goals as those <MouseDownLink  href="https://blog.ethereum.org/2019/06/21/ef-supported-teams-development-report-2019-pt-1">within the</MouseDownLink> Ethereum Foundation. A <MouseDownLink  href="https://blog.ethereum.org/2019/04/30/beginning-a-new-ethereum-org">community-driven hub for learners and teachers</MouseDownLink> was built to give all newcomers the ability to contribute to the long-term vision of Ethereum in time. <MouseDownLink  href="https://blog.ethereum.org/2019/08/20/announcing-the-devcon-scholars-program">Scholarships</MouseDownLink> were given to make the largest and most vibrant Ethereum gatherings a little bit more accessible to everyone. All these efforts of coordination were to strengthen the capacity of the ecosystem itself, rather than the Foundation. The way of subtraction is a longer, less efficient, more uncertain path to walk &ndash; but it is the only one that winds through the beauty of decentralization. </p>
        <p> From genesis, those that were so inclined <MouseDownLink href="https://github.com/ethereum/pm">had gathered regularly</MouseDownLink> to share, discuss, and test changes to the protocol both small and large. Modifying a living environment is a slow and methodical process of coordination. A <MouseDownLink  href="https://protocol-guild.readthedocs.io/en/latest/index.html">guild of contributors</MouseDownLink> formed to research and implement much-needed improvements to the core protocol. Gradually, research coalesced around proof-of-stake - a new consensus that the roots of the Merkle tree could be grafted to. Rather than 2 weeks, the undirected work <MouseDownLink  href="https://claim.zkdrop.io/mergooor-pass">of more than a hundred minds</MouseDownLink> to research, implement, and test this major protocol upgrade took nearly 2 years.</p>
        <p>But at a timeplace named block #15537393', Ethereum successfully upgraded away from mining, and into <MouseDownLink  href="https://ethereum.org/en/roadmap/merge/">a new, more sustainable consensus</MouseDownLink>. 
</p>

        <Image  src="/assets/ourstory-4.jpg" 
                width={2000} 
                height={1125} 
                alt="Serenity"
                layout="responsive" 
//                placeholder="blur"
//                blurDataURL="/assets/whatwedo-4-placeholder.png"
                priority
                />

        <p>Ethereum will continue to grow and evolve in the coming years, striving to meet the needs and challenges of an ever-larger ensemble of human relationships unified by consensus. The Ethereum Foundation will remain a cast of benevolent characters in the story in this ecosystem, acting as arborists of the infinite garden or rangers of the dark forest: Planting seeds. Mapping territory. Building with uncut wood. </p>
        <p>Serenity is a process of becoming &ndash; a vision of the future that must be arrived at together, independently, as humans loosely coupled yet highly aligned. When Ethereum is ready to meet the needs of billions, the Ethereum Foundation's chapter in the story of Ethereum may be over, but the values it protected will persist in the soul of the protocol, and all those who enact it. </p>
        <blockquote>
        <em>“To live till you die<br />
        is to live long enough.”</em> &ndash; Lao Tzu
        </blockquote>

        <MouseDownLink href="/philosophy" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> Sit with our philosophy </p>
        </MouseDownLink>


      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation;