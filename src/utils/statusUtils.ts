export const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'pending':
    case 'in-progress':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'critical':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};