import { Flame, Leaf, ThermometerSun} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import rocketStoveFigure from '../assets/rocketstovefigure.png'
import rocketStoveDiagram from '../assets/rocketstovediagram.png'

export default function RocketStove() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Rocket Stove</h2>
        <p className="mt-4 text-lg text-gray-600">Efficient, sustainable, and revolutionary cooking solution</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">How It Works</h3>
          <p className="text-gray-600 leading-relaxed">
            A rocket stove is a highly efficient stove that uses small pieces of wood as fuel. It's design promotes near complete combustion before the heat and flames reach the cooking surface, ensuring maximum efficiency.{' '}
            <span 
              className='underline cursor-pointer hover:text-amber-600 transition-colors'
              onClick={() => setIsDialogOpen(true)}
            >
              Click here to learn more about rocket stove.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <Flame className="h-6 w-6 text-amber-600 mb-2" />
              <h4 className="font-semibold">High Efficiency</h4>
              <p className="text-sm text-gray-600">Uses 60% less fuel than traditional stoves</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <Leaf className="h-6 w-6 text-amber-600 mb-2" />
              <h4 className="font-semibold">Eco-Friendly</h4>
              <p className="text-sm text-gray-600">Reduces smoke and carbon emissions</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={rocketStoveDiagram}
            alt="Rocket Stove Diagram"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
            <ThermometerSun className="h-6 w-6 mb-2" />
            <p className="font-semibold">90% Heat Efficiency</p>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Detailed Guide to Rocket Stove</DialogTitle>
          </DialogHeader>

          <div className="space-y-8 py-4">
            {/* Figure Section */}
            <section className="border-2 border-amber-100 rounded-xl p-4">
              <h3 className="text-xl font-semibold mb-4">Rocket Stove</h3>
              <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <img src={rocketStoveFigure} alt="" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Design Components</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Combustion Chamber</h4>
                  <p className="text-gray-600">It a lower opening in the rocket stove where wood is fed into the stove. It is designed this way so that we could feed fuel in a conrolled way typically small sticks that also allows efficient air flow from the front.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Vertical Chimney</h4>
                  <p className="text-gray-600">The vertical chimney ensures complete combustion of wood gases and generate intense heat which is directed upward efficiently to the cooking surface</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Top Platform</h4>
                  <p className="text-gray-600">The top section of the rocket stove serves as a cooking surface. Basically this is the area where heat transfer occurs. </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• fuel (e.g. twigs or sticks) is inserted into the combustion chamber.</li>
                <li>• Fuel is ignited and the combustion chamber maintains a high temperature to ensure efficient combustion.</li>
                <li>• Chimney directs the flame and smoke upward.</li>
                <li>• Pot or pan is placed in the top platform to cook ingredients.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">How to use a Rocket Stove?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Collect dry twigs, sticks, or small pieces of wood.</li>
                <li>• Place the small pieces of wood into the combustion chamber and light it. Use dry biomass for quicker ignition.</li>
                <li>• Feed sticks into the tube so that only the tips burn. Push them in as they burn down.</li>
                <li>• Ensure the chimney is clear and allows free airflow, which sustains combustion.</li>
                <li>• Once the fire is stable, place your pot or pan on the cooktop. Adjust fuel input as needed.</li>
              </ul>
            </section>

            
            <div>
              <button 
                onClick={() => setIsDialogOpen(false)}
                className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}