export default function Workshop() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Workshop Insights</h2>
        <p className="mt-4 text-lg text-gray-600">
          Learn about our experience and research findings
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Recent Workshop Highlights
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our recent workshop brought together experts and enthusiasts to explore the latest innovations in rocket stove technology. We conducted practical demonstrations, efficiency tests, and shared valuable insights on sustainable cooking methods.

            <br />
            <br />

            Our team decided to send me to Chisapani village, located in Syangja district of Nepal, carrying a TLUD stove to train the locals on using the stove and use Biochar obtained from it. It wasn't particularly challenging for me as it was my own village.

            <br />
            <br />

            After arriving, I planned how to encourage and invite people to the program. I fixed the date, time, and venue: 11 a.m. on the 28th of Ashwin, on an open field at the center of the village.

            <br />
            <br />

            To ensure participation, I visited each villager's house individually, inviting them and explaining the event details. The following day, I went to the market to purchase supplies like thread and balloons. On the 26th, I prepared raw materials by cutting the wood into smaller pieces to use during the demonstration.

            <br />
            <br />

            Finally, the day arrived—28th of Ashwin. I demonstrated the TLUD stove to 26 villagers with the following presentation:


            <br />
            <br />

            "Namaste, everyone! My name is Pawan, and today I am here to introduce you to this stove, which could replace your traditional stove. This event is sponsored by Purak Asia. This TLUD stove costs NPR 2300.

            It is almost smokeless and very easy to use. You can load the wood from the top opening and easily extract biochar from the bottom. As you can see, there are multiple ports on the top and bottom of the inner cylinder that regulate syngas, enhancing combustion and significantly reducing smoke production.

            The biochar produced can be sold in markets for profit or used in your crops to improve soil fertility and increase agricultural productivity. Additionally, the rocket stove is lightweight and easy to transport, so mobility is not a challenge.

            Thank you all very much for your time. Now, let me demonstrate how it works. After that, we'll have some fun with a balloon-bursting game!"

            <br />
            <br />

            (After demonstrating the stove by igniting it, we played the game. The winner was rewarded with a TLUD stove.)

            - Pawan Pokhrel
          </p>
          <div className="bg-amber-50 p-6 rounded-lg">
            {/* <h4 className="font-semibold mb-2">Key Takeaways</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Optimal fuel size and type for maximum efficiency</li>
              <li>• Best practices for maintenance and longevity</li>
              <li>• Safety guidelines and proper usage techniques</li>
            </ul> */}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6 h-full">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/JikFODC27xw"
              title="Workshop Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/YpPlENUhYU8"
              title="Workshop Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}