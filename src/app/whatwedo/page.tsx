import React from 'react';
import MouseDownLink from '../../components/MouseDownLink'
import ContentBlock from '../../components/page/Content';
import Image from 'next/image';

const EthereumFoundation = () => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>What We Do</h1>
        <h4>An origin story for the Ethereum Foundation</h4>
        <p>In the beginning, Ethereum was a <strong>frontier <sup>1</sup></strong>. </p>
        <p>It was a vast open space full of possibility, and settled by only a handful of people with vision, purpose, and a willingness to accept the risks of the unknown. Together they planted a Merkle tree – a special flora that thrives in the fertile soil of consensus.</p>
        <p>Ether, a substance scattered across the landscape, was the only resource at hand for the settlers, but it was enough. Mining for Ether was very easy at first, and although it consumed power, the act enriched the soil in which the Merkle trees were to thrive.</p>
        
        <Image  src="/assets/whatwedo-1.png" 
                width={2000} 
                height={1333} 
                alt="Frontier"
                layout="responsive"
                placeholder="blur"
                blurDataURL="/assets/whatwedo-1-placeholder.png"
                />


        <p>Ether and the Merkle tree were (and still are) inseparable elements in the ecosystem called Ethereum; two parts dancing together in concert to create a whole. The founders and early settlers of Ethereum shaped their world using a curious property of Merkle trees: Using just the right words and a small amount of ether, anyone can instruct a Merkle tree how to grow. By passing the right instructions to the seedlings, the settlers could direct the roots, branches, and leaves of the Merkle tree in any way they desired.</p>
        <p>They built simple things at first. The first tools for the safekeeping of Ether. Clever instructions that allowed the leaves of the tree to act as a ledger, or to tabulate sums. Useful adapters to make the trees work together with older, more familiar technologies.</p>
        <p>To those that came to build it was apparent that these wondrous trees had the potential to create complex and extraordinary structures – structures robust enough to trust with real value; durable enough to support a living community.</p>
        <p>Though influenced heavily by the designs and dreams of the early builders, Ethereum was (and still is) a common garden shared by all, owned by none. In those early days, the Ethereum Foundation was essential to building all that was needed for a larger population yet to arrive.</p>
        <p>Many did arrive. Enticed by the possibility of creation, new builders came to Ethereum to make their own structures intertwined with the living Merkle tree. People discovered ways to hang art from the leaves of the tree, to use its sturdiness in times of uncertainty, to inscribe in its immutable history records of ownership for loved items. Academies, guilds, and bazaars were founded amidst the tangle of its branches.</p>
        <p>Gradually, Ethereum became a <strong>homestead <sup>2</sup></strong>.</p>

        <Image  src="/assets/whatwedo-2.png" 
                width={2000}
                height={1333}
                alt="Homestead"
                layout="responsive"
                placeholder="blur"
                blurDataURL="/assets/whatwedo-2-placeholder.png"
                 />

        <p>Not all came to build. Some had come merely to mine the Ether, or to seek profit through buying and selling it on an open market. Not all came with good intentions. Some sought to exploit flaws in the newly-built structures, to steal unguarded Ether, or to prey on the optimism and naivete of newcomers to the community. Not all who came understood the neutral entanglement of the Merkle tree root. Some sought to build cathedrals in the garden, and to surround them with walls and gates denying entry to undesirables.</p>
        <p>Together with a larger community, the Ethereum Foundation worked to spread knowledge about the interconnectedness of the trees, and to understand that the vitality of the garden emerged from the freedom of unconstrained creation. Ethereum was (and still is) a permissionless garden, open to all, restricted by none.</p>
        <p>Still more people arrived with new ideas, dreams, and motivations. They built together with those who had settled before, or struck out on their own to explore new frontiers deeper into the garden, which had grown out past the edges of the town, and become a forest.</p>
        <p>The forest was vast, and contained multitudes. Unimaginable and rogue creatures lurked deep in the dense trees stretching out into the unknown. Without seeking to hinder the balance of life in the forest, and with the assistance of many, the Foundation worked against the darkness, helping those living in the garden to avoid danger and malfeasance, educating new builders on safety, and researching better ways to nurture an ecosystem that was no longer fragile, but not yet mature.</p>

        <Image  src="/assets/whatwedo-3.png" 
                width={2000}
                height={1333}
                alt="Metropolis"
                layout="responsive"
                placeholder="blur"
                blurDataURL="/assets/whatwedo-3-placeholder.png"
                />

        <p>After years, Ethereum was a <strong>metropolis <sup>3</sup></strong>. A vibrant, bustling city of not just builders, but also artists, designers, entrepreneurs, financiers, scholars, and even lawyers.</p>
        <p>The garden (which was a forest) had growing pains. The Merkle trees were limited by their own weight, struggling to support the disparate and varying needs of all the ecosystem at once. Mining, which was once necessary for the fertile soil of consensus, was burdened by heavy power consumption and would ultimately exact a heavy toll on all life in the realm.</p>
        <p>Ecologists, economists, and rangers of and outside the Foundation researched new methods to maintain the longevity of the garden, and to prepare for still more people. Some found solutions in new varieties of Merkle tree that grew faster and used less Ether, all while being supported by their slower, sturdier counterparts. Others researched the viability of newly-discovered Verkle trees to graft onto the existing roots of the garden. Some proposed a  <strong>ceremony <sup>4</sup></strong> to summon new life from the entropy of the universe that would bind to the roots of the garden.</p>
        <p>Many focused on a long-envisioned fundamental change to Ethereum, which would end the wasteful practice of Ether mining altogether. It was foretold that this event would mark the beginning of <strong>Serenity <sup>5</sup></strong> – an era when the infinite garden would be ready to strive toward being a home for all humans.</p>

        <Image  src="/assets/whatwedo-4.png" 
                width={2000}
                height={1333}
                alt="Serenity"
                layout="responsive" 
                placeholder="blur"
                blurDataURL="/assets/whatwedo-4-placeholder.png"
                />

        <p>The Foundation recognized that Serenity could only be realized as a natural, undirected process emerging from the collaboration of many community members. Ethereum flourishes when sufficient diversity ensures collective resilience, and when there are no indispensable actors in the ecosystem. Ethereum is (and will always be) a true public good: Directed by none, useful for all.</p>
        <p>So a long-term strategy was adopted: Serenity through subtraction. Instead of growing power and becoming more essential, the strategy of subtraction entails cultivating plurality and decentralization in the infinite garden, so that Ethereum never depends on single, isolated agents to thrive. Subtraction is seldom the easiest or most efficient approach, but Ethereum’s future must be arrived at together, independently – as humans loosely coupled yet highly aligned.</p>
        <p>The Foundation still does much to support Ethereum. We endeavor for the long-term health of Ethereum without control or direct influence. We allocate funds to promote pluralism and independent cooperation. We support efforts to grow and develop new communities of builders working in the interest of public good. We are infinite gardeners and rangers of <strong>the dark forest <sup>6</sup></strong>  – planting seeds, nurturing growth, and continuing to play.</p>

        <MouseDownLink href="/philosophy" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> Sit with our philosophy </p>
        </MouseDownLink>

        <div id="reference-list">
          <ol>
            <li><MouseDownLink  href="https://blog.ethereum.org/2015/07/22/frontier-is-coming-what-to-expect-and-how-to-prepare">Frontier</MouseDownLink> was the first mainnet release of Ethereum, in 2015.</li>
            <li><MouseDownLink  href="https://blog.ethereum.org/2016/02/29/homestead-release">Homestead</MouseDownLink> was the first major upgrade to the Ethereum network.</li>
            <li>Starting with <MouseDownLink  href="https://blog.ethereum.org/2017/10/12/byzantium-hf-announcement">Metropolis</MouseDownLink>, Ethereum network upgrades adopted a naming scheme of major cities in the history of civilization.</li>
            <li><MouseDownLink  href="https://ceremony.ethereum.org/">The KZG ceremony</MouseDownLink> is an important milestone in the scalability of Ethereum. You, dear reader, can donate entropy to the ceremony until Mar 14, 2023.</li>
            <li>Serenity was the original name for upgrades to Ethereum that included switching to Proof-of-Stake, which occurred in September 2022, but many upgrades once considered part of ‘Serenity’ such as sharding are still planned.</li>
            <li>The dark forest is an allegory coined by Cixin Liu about the Fermi Paradox, but it is often applied to Ethereum, referring to the adversarial environment of smart contracts on a public, permissionless blockchain.</li>
          </ol>
        </div>

        <MouseDownLink href="/philosophy" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> Sit with our philosophy </p>
        </MouseDownLink>

      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation;