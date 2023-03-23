export interface UserDTO {
    code: string
    created_at: Date
    email: string
    id: number
    semaphoreId: string
    userName: string
    url: string
    publicUrl: string
}

export interface EventsDTO {
    created_at: Date
    endDate: Date
    endTime: string
    id: number
    info: string
    location: string
    name: string
    organizers: string[]
    startDate: Date
    startTime: string
    tags: string[]
    slug: string
    publicUrl: string
    type: String
    sessions: SessionsDTO[]
    item_id: number
}

export interface SessionsDTO {
    id: number
    created_at: Date
    name: string
    location: string
    startDate: Date
    endDate: Date
    startTime: string
    tags: string[]
    endTime: string
    info: string
    organizers: string[]
    team_members: { name: string; role: string }[]
    event_id: number
    isOpen: boolean
    rsvps: RsvpDTO[]
    hasTicket: boolean
    participants: ParticipantsDTO[]
    favoritedSessions: FavoritedSessionsDTO[]
    format: string
    track: string
    type: string
    equipment: string
    subevent_id: number
    level: any
    event_slug: string
    event_item_id: number
}

export interface RsvpDTO {
    id: number
    created_at: Date
    session_id: number
    user_id: number
}

export interface ParticipantsDTO {
    created_at: Date
    event_id: number
    user_id: number
    events: EventsDTO
    users: UserDTO[]
    id: number
}

export interface FavoritedEventsDTO {
    created_at: Date
    id: number
    event_id: number
    user_id: number
    events: EventsDTO
    users: UserDTO[]
}

export interface FavoritedSessionsDTO {
    created_at: Date
    id: number
    session_id: number
    user_id: number
}
