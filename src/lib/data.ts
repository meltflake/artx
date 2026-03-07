import schoolsData from '@/data/schools.json'
import programsData from '@/data/programs.json'
import type { School, Program } from './types'

export function getAllSchools(): School[] {
  return schoolsData as School[]
}

export function getSchoolById(id: string): School | undefined {
  return getAllSchools().find(s => s.id === id)
}

export function getAllPrograms(): Program[] {
  return programsData as Program[]
}

export function getProgramById(id: string): Program | undefined {
  return getAllPrograms().find(p => p.id === id)
}

export function getSchoolsByProgram(programId: string): School[] {
  return getAllSchools().filter(s => s.programs.includes(programId))
}

export function getProgramsBySchool(schoolId: string): Program[] {
  const school = getSchoolById(schoolId)
  if (!school) return []
  return getAllPrograms().filter(p => school.programs.includes(p.id))
}

export function getCountryLabel(code: string): string {
  const map: Record<string, string> = {
    US: '美国', UK: '英国', CA: '加拿大', AU: '澳大利亚'
  }
  return map[code] || code
}

export function getCountryFlag(code: string): string {
  const map: Record<string, string> = {
    US: '🇺🇸', UK: '🇬🇧', CA: '🇨🇦', AU: '🇦🇺'
  }
  return map[code] || '🌍'
}

export function getTierLabel(tier: string): string {
  return tier === 'top' ? '顶尖档' : '中级档'
}
