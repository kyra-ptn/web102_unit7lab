import { createClient } from '@supabase/supabase-js'

const URL = 'https://gxrracdgamcwkvhfjinv.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cnJhY2RnYW1jd2t2aGZqaW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNzg0ODksImV4cCI6MjA2NzY1NDQ4OX0.eoguuqq4j31v1av4Hw-U1icCeixRCVP2XpGLlERS8d0'

export const supabase = createClient(URL, API_KEY)