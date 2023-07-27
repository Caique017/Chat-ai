'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from "ai/react"
import { ScrollArea } from "./scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api : '/api/chat',
  })

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[430px] w-full space-y-4 pr-4">
            { messages.map(message => {
              return (
                  <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                    {message.role === 'user' && (
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                        <AvatarImage src="https://github.com/Caique017.png" />
                      </Avatar>
                    )}

                    {message.role === 'assistant' && (
                      <Avatar>
                        <AvatarFallback>RS</AvatarFallback>
                        <AvatarImage src="https://github.com/rocketseat.png" />
                      </Avatar>
                    )}
                    <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">
                      {message.role === 'user' ? 'Usuário' : 'AI'}: 
                    </span>
                      {message.content}
                    </p>
                  </div>
              )
            }) }
          </ScrollArea>
        </CardContent>
        <CardFooter className="space-x-2">
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}