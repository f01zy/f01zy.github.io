type Status = "dropped" | "development" | "completed"

export interface Project {
  name: string
  status: Status
  github: string
  images: Array<string>
}