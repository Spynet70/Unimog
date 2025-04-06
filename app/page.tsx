"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Pencil } from "lucide-react";

export default function HomePage() {
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pasaulio Kelionė Sunkvežimiu</h1>
        <p className="text-lg text-gray-600">
          Sek mano nuotykius keliaujant aplink pasaulį ekspediciniu kemperiu – nuotraukos,
          maršrutai, video ir dienoraščio įrašai.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <MapPin className="w-10 h-10 mb-2" />
            <h2 className="text-xl font-semibold">Maršrutas</h2>
            <p className="text-sm text-gray-500 mb-4">
              Peržiūrėk interaktyvų žemėlapį su visais kelionės taškais.
            </p>
            <Button variant="outline">Žiūrėti žemėlapį</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Camera className="w-10 h-10 mb-2" />
            <h2 className="text-xl font-semibold">Galerija</h2>
            <p className="text-sm text-gray-500 mb-4">
              Nuotraukos ir video iš kiekvieno kelionės etapo.
            </p>
            <Button variant="outline">Žiūrėti galeriją</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Pencil className="w-10 h-10 mb-2" />
            <h2 className="text-xl font-semibold">Įrašai</h2>
            <p className="text-sm text-gray-500 mb-4">
              Dienoraščio įrašai, įspūdžiai ir kelionės istorijos.
            </p>
            <Button variant="outline">Skaityti įrašus</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

