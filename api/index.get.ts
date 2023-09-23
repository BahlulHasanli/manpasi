import { ManpasiResponse, define } from '@/core/index'
import { json } from '@/core/options'

export default define(() => {
  return ManpasiResponse(json([{ name: 'Jett Madison' }, { name: 'Luther King' }]), {
    status: 200
  })
})
