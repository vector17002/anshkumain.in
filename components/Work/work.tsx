import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { EduTimeline, ExTimeline } from "./timeline"
import { educations, experiences } from "@/lib/constants"

export function EducationExperience() {
  return (
    <Tabs defaultValue="education" className="w-full mt-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Card>
          <CardContent className="space-y-2 mb-5">
             {/* <Timeline datas={experiences}/> */}
             <ExTimeline events={experiences}/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
      <Card>
          <CardContent className="space-y-2 mb-5">
             {/* <Timeline datas={experiences}/> */}
             <EduTimeline events={educations} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
