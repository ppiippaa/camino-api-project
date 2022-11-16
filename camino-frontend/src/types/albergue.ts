export type Albergue = {
    id: string,
    name: string | null,
    address: string | null,
    town: string | null,
    phone: string | null,
    webUrl: string | null,
    bookingUrl: string | null,
    locationInfo: string | null,
    availability: string | null,
    entryFrom: string | null,
    coordinates: {
        lat: string,
        long: string
    } | null,
    accommodation: any,
    amenities: string[] | null,
    camino: string | null,
    image: string | null,
}

