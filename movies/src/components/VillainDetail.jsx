import React from 'react';
import { useParams } from 'react-router-dom';
import villainsData from '../data/villainsData';

function VillainDetail() {
  const { id } = useParams(); // Get the villain ID from URL params
  const villain = villainsData.find((villain) => villain.id === parseInt(id));

  if (!villain) {
    return <div>Villain not found</div>;
  }

  let additionalDetails;

  // Check the villain's name to determine additional details
  switch (villain.name) {
    case 'Annabelle':
      additionalDetails = (
        <div>
          <p>Annabelle is a fictional character originating from the "The Conjuring" universe, a series of horror films created by James Wan. The character is depicted as a possessed doll with a sinister presence, often serving as a conduit for demonic forces.</p>
          <p>Here's some information about Annabelle:</p>
          <p>Origin: Annabelle made her first appearance in the film "The Conjuring" (2013), where she was introduced as a haunted doll. The doll was initially owned by two young nurses who reported disturbing occurrences, leading paranormal investigators Ed and Lorraine Warren to intervene.</p>
          <p>Appearance: Annabelle is portrayed as a vintage porcelain doll with a pale complexion, big eyes, and red lips. Despite her innocent appearance, she exudes an unsettling aura, contributing to her eerie presence in the films.</p>
          <p>Possession: In the film series, Annabelle is depicted as a conduit for malevolent spirits seeking to possess human hosts. The doll itself is not possessed but serves as a vessel for dark entities to manipulate and influence the physical world.</p>
          <p>Powers: Annabelle is associated with various supernatural phenomena, including telekinesis, manipulation of electronic devices, and the ability to move autonomously. These powers are often used to terrorize and harm those who come into contact with her.</p>
          <p>Infamy: Annabelle has become an iconic figure in modern horror cinema, with her likeness featured prominently in promotional material, merchandise, and spin-off films. The character's chilling presence has contributed to the success of "The Conjuring" franchise.</p>
          <p>Spin-off: Due to her popularity, Annabelle has received her own series of films within "The Conjuring" universe, starting with "Annabelle" (2014), followed by "Annabelle: Creation" (2017), and "Annabelle Comes Home" (2019). These films delve deeper into the doll's backstory and her impact on unsuspecting victims.</p>
          <p>Cultural Impact: Annabelle has become a cultural icon in the horror genre, inspiring Halloween costumes, fan art, and references in popular media. The character's enduring popularity highlights the enduring fascination with supernatural entities and their ability to evoke fear in audiences.</p>
        </div>
      );
      break;
    
      case 'Hannibal Lecter':
        additionalDetails = (
          <div>
            <p>Hannibal Lecter is a fictional character known as one of the most iconic and complex villains in literature and film.</p>
            <p>Here's some information about Hannibal Lecter:</p>
            <p>Origin: Hannibal Lecter was created by author Thomas Harris and first appeared in the novel "Red Dragon" (1981). He is a brilliant psychiatrist and cannibalistic serial killer.</p>
            <p>Appearance: Hannibal Lecter is often depicted as a sophisticated and cultured individual with impeccable manners and refined tastes. He conceals his true nature behind a facade of charm and intellect.</p>
            <p>Intelligence: Hannibal Lecter possesses extraordinary intelligence and keen observational skills. He is a master manipulator who can easily exploit the weaknesses of those around him.</p>
            <p>Modus Operandi: Hannibal Lecter's modus operandi involves luring his victims into a false sense of security before subjecting them to brutal torture and death. He often consumes parts of his victims' bodies as a form of psychological warfare.</p>
            <p>Psychological Complexity: Hannibal Lecter's character is deeply complex, with layers of psychological depth that explore themes of morality, identity, and the nature of evil. He is portrayed as a figure of both horror and fascination, challenging conventional notions of villainy.</p>
            <p>Portrayals: Hannibal Lecter has been portrayed in various media adaptations, most notably by Anthony Hopkins in the films "The Silence of the Lambs" (1991), "Hannibal" (2001), and "Red Dragon" (2002). Hopkins' performance earned him an Academy Award for Best Actor.</p>
            <p>Cultural Impact: Hannibal Lecter has left an indelible mark on popular culture, influencing countless depictions of serial killers in literature, film, and television. He remains one of the most enduring and compelling villains in contemporary fiction.</p>
          </div>
        );
        break;
      
        case 'Ghostface':
          additionalDetails = (
            <div>
              <p>Ghostface is a fictional identity adopted by various characters in the "Scream" film series, created by Wes Craven and Kevin Williamson.</p>
              <p>Here's some information about Ghostface:</p>
              <p>Origin: Ghostface first appeared in the film "Scream" (1996), where the identity was used by multiple individuals to commit a series of murders in the fictional town of Woodsboro, California.</p>
              <p>Appearance: Ghostface is typically depicted wearing a black robe and a white mask resembling a screaming ghost. The mask, known as the "Father Death" mask, has become an iconic symbol of the Scream franchise.</p>
              <p>Motivation: The motivations of Ghostface vary depending on the individual behind the mask. In the original film, the killers were motivated by a desire for fame and revenge. Subsequent films in the series explore different motives, including trauma and obsession.</p>
              <p>Modus Operandi: Ghostface employs a variety of tactics to terrorize and murder their victims, including making menacing phone calls, stalking them, and attacking with a knife or other weapons.</p>
              <p>Metafictional Element: The Scream franchise is known for its metafictional elements, often referencing and subverting common horror tropes. Ghostface's identity and motives reflect this self-awareness, adding layers of complexity to the character.</p>
              <p>Legacy: Ghostface has become an iconic figure in horror cinema, symbolizing the blending of horror and comedy elements. The character's mask and catchphrase ("What's your favorite scary movie?") have become ingrained in popular culture.</p>
              <p>Impact: The Scream franchise revitalized the slasher genre in the late 1990s and inspired a new wave of horror films. Ghostface's blend of horror and humor has influenced subsequent horror movies and television series.</p>
            </div>
          );
          break;
        
          case 'Michael Myers':
            additionalDetails = (
              <div>
                <p>Michael Myers is a fictional character known as one of the most iconic and enduring figures in the horror genre.</p>
                <p>Here's some information about Michael Myers:</p>
                <p>Origin: Michael Myers first appeared in the film "Halloween" (1978), directed by John Carpenter. He is depicted as a masked serial killer who stalks and murders unsuspecting victims in the fictional town of Haddonfield, Illinois.</p>
                <p>Appearance: Michael Myers is often portrayed as a silent, emotionless figure wearing a white mask and blue jumpsuit. His menacing presence and iconic mask have become synonymous with the Halloween franchise.</p>
                <p>Psychological Profile: Michael Myers is often portrayed as a relentless and unstoppable force of evil, with no discernible motive for his actions. He exhibits traits of pure evil and is driven by a primal urge to kill.</p>
                <p>Modus Operandi: Michael Myers' modus operandi typically involves stalking his victims with stealth and precision before brutally murdering them with a variety of weapons, including knives and other sharp objects.</p>
                <p>Survival: One of Michael Myers' defining characteristics is his seemingly supernatural ability to survive seemingly fatal injuries and return to continue his killing spree. This aspect of his character adds to his mystique and terror.</p>
                <p>Legacy: Michael Myers has become an iconic figure in horror cinema, inspiring numerous sequels, spin-offs, and reboots. He is often regarded as one of the most enduring and terrifying villains in film history.</p>
                <p>Impact: The character of Michael Myers has had a profound impact on popular culture, influencing other horror films, literature, and media. His iconic mask and chilling theme music are instantly recognizable symbols of terror.</p>
              </div>
            );
            break;
    default:
      additionalDetails = null;
  }

  return (
    <div>
      <h2>{villain.name}</h2>
      <p>Description: {villain.description}</p>
      {/* Display additional details based on the villain's name */}
      {additionalDetails}
    </div>
  );
}

export default VillainDetail;
