import makingbriquettes from '../assets/m0lFQhBd.jpg'
import makingFertilizer from '../assets/fertilizer.jpg'
import desginAndWorking from '../assets/designAndWorkingDiagram.png'
import makingSoap from '../assets/soapPicture.png'
import Picture1 from '../assets/chisapani.png'
import Picture2 from '../assets/picture2.png'
import Picture3 from '../assets/picture3.png'
import Picture4 from '../assets/picture4.png'
import Picture5 from '../assets/picture5.png'
import Picture6 from '../assets/picture6.png'
import Picture7 from '../assets/picture7.png'

export default function Progress() {
  const milestones = [
    {
      date: 'July 2024',
      title: 'Design and Working: ',
      description: 'For our project, we deployed a Top-Lit Updraft (TLUD) stove design, capable of consuming a quintal of biomass and producing around 25 kg of biochar in a smokeless manner. We filled the kiln with biomass and ignited it from the top. The bottom layer of biomass can be thick wood or coconut shells but the upper layer needs to be of materials that can be easily ignited. As the fire progressed, we continued adding more biomass. At the end of the burn, the kiln yielded biochar. To prevent it from turning into ash, we cooled it by gradually sprinkling water, separated the unburnt pieces, and dried the biochar in the sun. Finally, we crushed the charcoal into a powdered form using a grinder, which was then used to create finished products.',
      image: desginAndWorking
    },
    {
      date: 'August 2024',
      title: 'Making Briquettes: ',
      description: 'We mixed the powdered biochar with thick-boiled flour in an 8:1 ratio by volume. The mixture was placed into molds and pressed to shape the briquettes. Since biochar lacks good binding properties, flour was used to hold the briquettes together. For cost efficiency, expired flour sourced from the market was used. The wet briquettes were then sun-dried for two days to produce lightweight, easily combustible briquettes suitable for barbecues. The briquettes were tested and sold, producing a smokeless fire that was commercially well-received in barbeques.',
      image: makingbriquettes
    },
    {
      date: 'September 2024',
      title: 'Making Soap: ',
      description: 'The biochar was further pulverized into sufficiently small particles to avoid pricking the skin. We then mixed the powdered biochar with melted soap base in a 1:10 ratio by volume and poured the mixture into silicone molds to dry. The resulting soap produced ample lather and provided effective cleansing. Due to its porous nature, the biochar effectively absorbs dirt and impurities from the skin.',
      image: makingSoap
    },
    {
      date: 'October 2024',
      title: 'Making Fertilizers: ',
      description: 'We mixed the crushed biochar with compost and cow urine and left it in a closed container for a week, allowing the porous biochar to absorb the nutrients. The resulting fertilizer promoted better plant growth in three tested samples. In the long term, we expect biochar to improve soil structure, aeration, and water-holding capacity.',
      image: makingFertilizer
    }
  ];

  const galleryImages = [
    { src: Picture1, name: 'Workshop In Chisapani, Syangja' },
    { src: Picture2, name: 'Burning of Biomass in TLUD Stove' },
    { src: Picture7, name: 'Forest Waste and Agricultural Residue Collection' },
    { src: Picture3, name: 'Powdered Form of Biochar' },
    { src: Picture4, name: 'Loading Biomass into TLUD Kiln' },
    { src: Picture5, name: 'Locally made Mold to make Briquettes' },
    { src: Picture6, name: 'Workshop in Krishnanagar-7, Kapilvastu' }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Research Progress</h2>
        <p className="mt-4 text-lg text-gray-600">Tracking our Journey</p>
      </div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="text-amber-600 font-semibold">{milestone.date}</div>
              <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <img
                src={milestone.image}
                alt={milestone.title}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Image Gallery Section */}
      <div className="bg-gray-50 py-12 px-4 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">More Images from our Research</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 text-center">
                <h4 className="text-lg font-bold text-gray-600">{image.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}