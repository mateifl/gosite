from django import forms


class SearchForm(forms.Form):
    first_player = forms.CharField(label='First player', required=False)
    second_player = forms.CharField(label='Second player', required=False)
    group = forms.CharField(label='Group', required=False)
    description = forms.CharField(label='Description', required=False)
