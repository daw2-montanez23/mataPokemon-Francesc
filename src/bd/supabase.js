import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmbbyjswebkajdobfums.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYmJ5anN3ZWJrYWpkb2JmdW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzk5MTksImV4cCI6MTk5Mjc1NTkxOX0.-lhHUw7svlGzvwQm1TuzG3ihm4IO9VskmnSkaxtPABc'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)