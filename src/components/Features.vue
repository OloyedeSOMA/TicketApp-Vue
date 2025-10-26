<template>
  <section class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            :class="`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`"
          >
            <img :src="feature.Icon" alt="" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TicketIcon from '@/assets/icons/Ticket.svg'
import ChartIcon from '@/assets/icons/chart.svg'
import CheckIcon from '@/assets/icons/check.svg'
import ZapIcon from '@/assets/icons/zap.svg'

const features = [
  {
    Icon: TicketIcon,
    color: 'bg-blue-100 text-blue-600',
    title: 'Create Tickets',
    desc: 'Quickly create and organize support tickets with detailed descriptions and priorities.',
  },
  {
    Icon: ChartIcon,
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Track Progress',
    desc: 'Monitor ticket status in real-time and keep your team aligned on priorities.',
  },
  {
    Icon: CheckIcon,
    color: 'bg-green-100 text-green-600',
    title: 'Resolve Issues Faster',
    desc: 'Streamline your workflow and close tickets efficiently with smart organization.',
  },
  {
    Icon: ZapIcon,
    color: 'bg-purple-100 text-purple-600',
    title: 'Boost Productivity',
    desc: 'Increase team efficiency with intuitive tools and clear visibility into all tickets.',
  },
]
</script>